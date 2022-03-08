import { Branch, Company, Group, ManagerModel, Module } from './manager.model';

export class ManagerMapper {
  static fromCompany(company: Company): ManagerModel {
    return {
      value: company,
      description: `${company.id} - ${company.description}`,
    };
  }

  static fromCompanies(companies: Company[]): ManagerModel[] {
    return companies.map((company) => ManagerMapper.fromCompany(company));
  }

  static fromBranch(branch: Branch): ManagerModel {
    return {
      value: branch,
      description: `${branch.codEstab} - ${branch.razaoSocial}`,
    };
  }

  static fromBranches(branches: Branch[]): ManagerModel[] {
    return branches.map((branch) => ManagerMapper.fromBranch(branch));
  }

  static fromGroup(group: Group): ManagerModel {
    return {
      value: group,
      description: group.description,
    };
  }

  static fromGroups(groups: Company[]): ManagerModel[] {
    return groups.map((group) => ManagerMapper.fromGroup(group));
  }

  static fromModule(module: Module): ManagerModel {
    return {
      value: module,
      description: module.name,
    };
  }

  static fromModules(modules: Module[]): ManagerModel[] {
    return modules.map((module) => ManagerMapper.fromModule(module));
  }
}
